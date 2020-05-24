import { shape, string } from 'prop-types';

export default shape({
  '@ref': shape({
    id: string.isRequired,
    collection: shape({
      '@ref': shape({
        id: string.isRequired,
        collection: shape({
          '@ref': shape({
            id: string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
});
