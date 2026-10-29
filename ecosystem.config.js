// PM2 config for the Next.js server (API routes). IIS serves the static pages and
// proxies /api/* to this process. Deployed copy lives in C:\apps\electromech.
module.exports = {
  apps: [
    {
      name: "electromech",
      script: "server.js",
      cwd: "C:\\apps\\electromech",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOSTNAME: "127.0.0.1",
        NEXT_TELEMETRY_DISABLED: 1,
        // Set these to send orders through the WhatsApp Business API instead of a wa.me link
        // WHATSAPP_API_URL: "",
        // WHATSAPP_TOKEN: "",
      },
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      out_file: "C:\\apps\\electromech\\logs\\out.log",
      error_file: "C:\\apps\\electromech\\logs\\error.log",
      time: true,
    },
  ],
}
