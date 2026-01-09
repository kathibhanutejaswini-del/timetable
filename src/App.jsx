import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App2.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h2>Weekly Time Table</h2>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mon</td>
            <td>25EC2101E<br />L - S-2<br />L303</td>
            <td>25EC2101E<br />L - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25CS1201E<br />S - S-2<br />L303</td>
            <td>25CS1201E<br />S - S-2<br />L303</td>
          </tr>

          <tr>
            <td>Tue</td>
            <td>25MT1205E<br />L - S-2<br />L303</td>
            <td>25MT1205E<br />L - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25CS1201E<br />S - S-2<br />L303</td>
            <td>25CS1201E<br />S - S-2<br />L303</td>
          </tr>

          <tr>
            <td>Wed</td>
            <td>25SC1204E<br />L - S-2<br />L303</td>
            <td>25SC1204E<br />L - S-2<br />L303</td>
            <td>25EC2101E<br />S - S-2<br />L303</td>
            <td>25EC2101E<br />S - S-2<br />L303</td>
            <td>25UC1204E<br />P - S-2<br />L303</td>
            <td>25UC1204E<br />P - S-2<br />L303</td>
          </tr>

          <tr>
            <td>Thu</td>
            <td>25SC1204E<br />P - S-2<br />L303</td>
            <td>25SC1204E<br />P - S-2<br />L303</td>
            <td>25EC2101E<br />S - S-2<br />L303</td>
            <td>25EC2101E<br />S - S-2<br />L303</td>
            <td>25UC1204E<br />P - S-2<br />L303</td>
            <td>25UC1204E<br />P - S-2<br />L303</td>
          </tr>

          <tr>
            <td>Fri</td>
            <td>25MT1205E<br />P - S-2<br />L303</td>
            <td>25MT1205E<br />P - S-2<br />L303</td>
            <td>25CS1201E<br />P - S-2<br />L303</td>
            <td>25CS1201E<br />P - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
          </tr>

          <tr>
            <td>Sat</td>
            <td>25MT1205E<br />P - S-2<br />L303</td>
            <td>25MT1205E<br />P - S-2<br />L303</td>
            <td>25CS1201E<br />P - S-2<br />L303</td>
            <td>25CS1201E<br />P - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
            <td>25SC1204E<br />S - S-2<br />L303</td>
          </tr>
        </tbody>
      </table>
    </div>
   )
}

export default App
