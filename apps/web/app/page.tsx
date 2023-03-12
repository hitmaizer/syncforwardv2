import Image from 'next/image';

async function getPosts() {
  const res = await fetch('http://localhost:1337/api/posts?populate=*');
  const posts = await res.json();
  return posts?.data;
}

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.attributes.title}</h1>
            <Image
              src={post.attributes.image.data.attributes.url}
              width={post.attributes.image.data.attributes.width}
              height={post.attributes.image.data.attributes.height}
              alt={post.attributes.title}
              placeholder="blur"
              blurDataURL={post.attributes.image.data.attributes.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
}
