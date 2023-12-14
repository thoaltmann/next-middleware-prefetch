const Test = (props: { page: { value: number } }) => {
  return <h1>Simple dynamic page: {props.page.value}</h1>
}

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {
      // Nested object to provoke _error instead of just having an empty value
      page : {
        value: ctx.params.dynamic
      },
    }
  }
}

export default Test