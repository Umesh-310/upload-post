import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Post Image</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Post</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
