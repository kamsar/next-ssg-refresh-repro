import { useState } from "react";
import Link from 'next/link';

const Home = () => {
  const [message, setMessage] = useState("");

  const preview = enable => {
    fetch(`/api/preview?preview=${enable ? "true" : "false"}`)
      .then(res =>
        setMessage(`Preview has been ${enable ? "enabled" : "disabled"}.`)
      )
      .catch(err => setMessage(`Oh no! ${err}`));
  };

  return (
    <div>
      <button type="button" onClick={() => preview(true)}>
        Preview On
      </button>
      <button type="button" onClick={() => preview(false)}>
        Preview Off
      </button>
      {message && <p>{message}</p>}

      <p>
        <Link href="/ssg">
          <a>SSG Page</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
