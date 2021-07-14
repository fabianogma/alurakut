export async function pFavoritas() {
    const followers = fetch(`https://api.github.com/users/fabianogma/followers`)
  
    return { pessoas: followers }
  }

  export default pFavoritas