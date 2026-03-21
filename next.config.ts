import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl({
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vi",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/vi",
        permanent: true,
      },
    ];
  },
});
