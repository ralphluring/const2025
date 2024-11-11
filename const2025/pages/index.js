import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'product' });
  return { props: { products: res.items } };
}

const HomePage = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.sys.id}>
          <h2>{product.fields.name}</h2>
          <p>{product.fields.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
