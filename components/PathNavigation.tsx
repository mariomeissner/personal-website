import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {
  pathComponents: string[]
}

export default function PathNavigation() {
  const router = useRouter()
  // const [path, setPath] = useState('')
  // useEffect(() => {
  //     if (router.isReady) {
  //         setPath(router.asPath)
  //         console.log(path)
  //     }
  // }, [router.isReady, router.asPath, path])
  const path = router.pathname.split('/')[1]
  const pathname = path ? path : 'home'

  return (
    <div className="flex items-center gap-x-2 font-mono font-semibold">
      <Link href="/" aria-label="home">
        <a className="mb-0.5 rounded px-2 py-1 transition hover:bg-gray-300 dark:hover:bg-gray-600">
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </Link>
      <Link href={`/${path}`} aria-label={path}>
        <a className="rounded px-2 transition hover:bg-gray-300 dark:hover:bg-gray-600">
          /{pathname}
        </a>
      </Link>
    </div>
  )
}
