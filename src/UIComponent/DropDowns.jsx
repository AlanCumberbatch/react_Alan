import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDowns() {
  return (
    <ul>
        <li>
          <Link to="/officialCourse/basic">Public Page</Link>
          {/* <Link to="/basic">Public Page</Link> */}
        </li>
        <li>
          <Link to="/officialCourse/advanced">Protected Page</Link>
          {/* <Link to="/advanced">Protected Page</Link> */}
        </li>
      </ul>
  )
}
