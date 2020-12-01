module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env(''),
      secretAccessKey: env(''),
      region: env('us-east-2'),
      params: {
        Bucket: env('cutco-strapi-images'),
      },
    },
  },
});
