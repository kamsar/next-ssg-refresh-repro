import { useRouter } from "next/router";

export default function Index(props) {
  var router = useRouter();

  return (
    <div>
      <h1>
        time: {props.time}
      </h1>

      <button type="button" onClick={() => router.replace(router.route)}>
        Replace Route
      </button>
    </div>
  );
}

export const getStaticProps = async context => {
  return {
    props: {
      time: new Date().toLocaleString()
    }
  };
};
