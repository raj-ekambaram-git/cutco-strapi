module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIARN4WD42MFWFVT4M5'),
      secretAccessKey: env('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'),
      region: env('us-east-2'),
      params: {
        Bucket: env('cutco-strapi-images'),
      },
    },
  },
});
