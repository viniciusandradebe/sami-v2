import Head from "next/head";
const Meta = ({ title, desc }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <link rel="stylesheet" href="https://use.typekit.net/udp3qnm.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </Head>
);
export default Meta;
