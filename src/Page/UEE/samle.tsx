import { RouteComponentProp } from "react-router-dom";
interface OtherPageProps extends RouteComponentProps<{ id: string }> {}

export default function Sample(props: OtherPageProps) {
  const { data } = props.location.state as { data: Data };
  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
