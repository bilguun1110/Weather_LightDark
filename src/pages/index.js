import { Light } from "@/components/Weather";
import { Search } from "@/components/Search";
export default function Home() {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <Light />
      </div>
    </div>
  );
}
