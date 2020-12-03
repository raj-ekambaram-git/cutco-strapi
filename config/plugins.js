module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID', 'AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY', 'AWS_SECRET_ACCESS_KEY'),
      region: env('AWS_REGION', 'AWS_REGION'),
      params: {
        Bucket: env('S3_MLL_BUCKET_NAME', 'S3_MLL_BUCKET_NAME'),
      },
    },
  },
});
