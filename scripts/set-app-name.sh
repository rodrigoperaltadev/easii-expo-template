#!/bin/bash

# Script para cambiar el nombre de la aplicación React Native Expo
# Uso: ./change-app-name.sh "Nuevo Nombre App" "nuevo-slug-app" "com.empresa.nuevaapp"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Script para cambiar nombre de aplicación React Native Expo${NC}"
echo "=================================================="

# Función para solicitar entrada del usuario
prompt_user() {
    local prompt_text="$1"
    local default_value="$2"
    local user_input
    
    if [ -n "$default_value" ]; then
        read -p "$prompt_text [$default_value]: " user_input
        echo "${user_input:-$default_value}"
    else
        read -p "$prompt_text: " user_input
        echo "$user_input"
    fi
}

# Función para crear slug desde nombre
create_slug() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g'
}

# Función para crear package name desde slug
create_package() {
    local base_domain="$1"
    local slug="$2"
    echo "${base_domain}.$(echo "$slug" | sed 's/-//g')"
}

# Solicitar información al usuario
echo -e "${YELLOW}Ingresa la información de tu nueva aplicación:${NC}"
echo

APP_NAME=$(prompt_user "Nombre de la aplicación (ej: Mi Nueva App)")
if [ -z "$APP_NAME" ]; then
    echo -e "${RED}❌ El nombre de la aplicación es requerido${NC}"
    exit 1
fi

# Generar slug automáticamente
DEFAULT_SLUG=$(create_slug "$APP_NAME")
APP_SLUG=$(prompt_user "Slug de la aplicación" "$DEFAULT_SLUG")

# Solicitar dominio base para package
DOMAIN_BASE=$(prompt_user "Dominio base para package (ej: com.empresa)" "com.easii")

# Generar package names
IOS_BUNDLE=$(create_package "$DOMAIN_BASE" "$APP_SLUG")
ANDROID_PACKAGE="${IOS_BUNDLE}.app"

echo
echo -e "${BLUE}📋 Resumen de cambios:${NC}"
echo "  📱 Nombre: $APP_NAME"
echo "  🔗 Slug: $APP_SLUG"
echo "  🍎 iOS Bundle: $IOS_BUNDLE"
echo "  🤖 Android Package: $ANDROID_PACKAGE"
echo

read -p "¿Continuar con estos valores? [y/N]: " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⏹️  Operación cancelada${NC}"
    exit 0
fi

echo
echo -e "${GREEN}🔄 Iniciando cambios...${NC}"

# Función para hacer backup
make_backup() {
    local file="$1"
    if [ -f "$file" ]; then
        cp "$file" "$file.backup"
        echo -e "${BLUE}📋 Backup creado: $file.backup${NC}"
    fi
}

# Función para actualizar archivo
update_file() {
    local file="$1"
    local description="$2"
    
    if [ -f "$file" ]; then
        make_backup "$file"
        echo -e "${YELLOW}📝 Actualizando $description...${NC}"
        return 0
    else
        echo -e "${RED}⚠️  Archivo no encontrado: $file${NC}"
        return 1
    fi
}

# 1. Actualizar app.json
if update_file "app.json" "app.json"; then
    sed -i "s/\"name\": \".*\"/\"name\": \"$APP_SLUG\"/" app.json
    sed -i "s/\"slug\": \".*\"/\"slug\": \"$APP_SLUG\"/" app.json
    sed -i "s/\"bundleIdentifier\": \".*\"/\"bundleIdentifier\": \"$IOS_BUNDLE\"/" app.json
    sed -i "s/\"package\": \".*\"/\"package\": \"$ANDROID_PACKAGE\"/" app.json
fi

# 2. Actualizar package.json
if update_file "package.json" "package.json"; then
    sed -i "s/\"name\": \".*\"/\"name\": \"$APP_SLUG\"/" package.json
fi

# 3. Actualizar settings.gradle
if update_file "android/settings.gradle" "Android settings.gradle"; then
    sed -i "s/rootProject.name = .*/rootProject.name = '$APP_NAME'/" android/settings.gradle
fi

# 4. Actualizar strings.xml
if update_file "android/app/src/main/res/values/strings.xml" "Android strings.xml"; then
    sed -i "s/<string name=\"app_name\">.*<\/string>/<string name=\"app_name\">$APP_NAME<\/string>/" android/app/src/main/res/values/strings.xml
fi

# 5. Actualizar README.md
if update_file "README.md" "README.md"; then
    sed -i "1s/.*/# $APP_NAME/" README.md
    sed -i "s/cd .*/cd $APP_SLUG/" README.md
fi

# 6. Actualizar archivo e2e si existe
if [ -f "e2e/character-detail-flow.yaml" ]; then
    if update_file "e2e/character-detail-flow.yaml" "E2E configuration"; then
        sed -i "s/appId: .*/appId: $ANDROID_PACKAGE/" e2e/character-detail-flow.yaml
    fi
fi

echo
echo -e "${GREEN}✅ Cambios completados exitosamente!${NC}"
echo
echo -e "${YELLOW}📋 Próximos pasos recomendados:${NC}"
echo "  1. Revisar los cambios realizados"
echo "  2. Ejecutar: rm -rf node_modules && yarn install"
echo "  3. Limpiar caché: yarn start --clear"
echo "  4. Para Android: cd android && ./gradlew clean"
echo "  5. Testear la aplicación"
echo
echo -e "${BLUE}💾 Los archivos originales fueron respaldados con extensión .backup${NC}"
echo -e "${GREEN}🎉 ¡Listo para usar tu nueva aplicación: $APP_NAME!${NC}"