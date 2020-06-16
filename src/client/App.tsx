import * as React from "react";

const App: React.FC<IAppProps> = (props) => {
  const [mile, setMile] = React.useState<number>(0);
  const [eighthundred, setEighthundred] = React.useState<number>(0);
  const [fourhundred, setFourhundred] = React.useState<number>(0);

  const calculateVDOT = () => {
    let converted800Mile = eighthundred * 2.2;
	let converted400Mile = fourhundred * 4.84;
  };

  return (
    <main className="container my-5">
      <section>
        <h3 className="text-dark text-center">
          Enter best race times in past six weeks (or best guess) for events of
          a mile and up (in total seconds):
        </h3>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Mile:</span>
          </div>
          <input
            type="number"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMile(Number(e))
            }
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">800 est. :</span>
          </div>
          <input
            type="number"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEighthundred(Number(e))
            }
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">400 est. :</span>
          </div>
          <input
            type="number"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFourhundred(Number(e))
            }
          />
        </div>
        <button className="btn btn-primary">Calculate VDOT</button>
      </section>
      <section>
        <h3 className="text-dark text-center">Paces from VDOT</h3>
      </section>
    </main>
  );
};

interface IAppProps {}

export default App;
