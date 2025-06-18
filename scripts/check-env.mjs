const REQUIRED_VARS = ['EXPO_PUBLIC_API_URL']

const missing = REQUIRED_VARS.filter((key) => !process.env[key])

if (missing.length > 0) {
  console.error('⛔ Missing required environment variables:')
  for (const v of missing) {
    console.error(`- ${v}`)
  }
  process.exit(1)
} else {
  console.log('✅ All required environment variables are set.')
}
