module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a9a641db0b9a1e14eb41009d436e0cce'),
  },
});
