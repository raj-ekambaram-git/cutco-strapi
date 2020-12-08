module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID', 'AWS_ACCESS_KEY_ID_PROD'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY', 'AWS_SECRET_ACCESS_KEY_PROD'),
      region: env('AWS_REGION', 'AWS_REGION_PROD'),
      params: {
        Bucket: env('S3_MLL_BUCKET_NAME', 'S3_MLL_BUCKET_NAME_PROD'),
      },
    },
  },
});
