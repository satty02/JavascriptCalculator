function App(){

    const [expression, setExpression] = React.useState(0)
    const [answer, setAnswer] = React.useState(0);

    const calculate = ()=>{
        setAnswer(eval(expression));
        setExpression((prev=>prev + '='));
        
    }


    const display = (symbol)=>{
        setExpression((prev)=>{
            if(prev===0){
                return symbol;
            }else if(expression.split('')[0]==='0' && expression.split('').length>1){
                if(expression.split('')[expression.split('').length-1]==='0'){
                    setExpression('0')
                }
            }else if(prev.split('')[prev.split('').length-1]==='.' && symbol ==='.'){
                return prev;
            }else if( expression.split('').filter(dot=>dot==='.').length===1 && symbol==='.'){
                return prev
            }          
            else{
                return prev + symbol
            }
        }
         );
        if(expression[expression.length-1] == '='){
            if(/[0-9.]/.test(symbol)){
                setExpression(symbol);
            }else{
                setExpression(answer + symbol);
            }
        }
    }

   

    const allClear= ()=>{
        setExpression(0);
        setAnswer(0)
    }
    return (

        <div className="container">
            <div className="grid">
                <div  className="dis">
                    <input type="text"  value={expression} placeholder='0' disabled/>
                    <div  id="display" className="total">{!answer ? expression : answer}</div>
                </div>
                <button onClick={allClear} id="clear" className="padButton AC dark-red">AC</button>  
                <button onClick={()=>display('/')} id="divide" className="padButton div">/</button>  
                <button onClick={()=>display('*')} id="multiply" className="padButton multiply">x</button>  
                <button onClick={()=>display('7')} id="seven" className="padButton seven dark-gray">7</button>  
                <button onClick={()=>display('8')} id="eight" className="padButton eight dark-gray">8</button>  
                <button onClick={()=>display('9')} id="nine" className="padButton nine dark-gray">9</button>  
                <button onClick={()=>display('-')} id="subtract" className="padButton minus ">-</button>  
                <button onClick={()=>display('4')} id="four" className="padButton four dark-gray">4</button>  
                <button onClick={()=>display('5')} id="five" className="padButton five dark-gray">5</button>  
                <button onClick={()=>display('6')} id="six" className="padButton six dark-gray">6</button>  
                <button onClick={()=>display('+')} id="add" className="padButton plus">+</button>  
                <button onClick={()=>display('1')} id="one" className="padButton one dark-gray">1</button>  
                <button onClick={()=>display('2')} id="two" className="padButton two dark-gray">2</button>  
                <button onClick={()=>display('3')} id="three" className="padButton three dark-gray">3</button>  
                <button onClick={calculate} id="equals" className="padButton equal dark-blue">=</button>  
                <button onClick={()=>display(0)} id="zero" className="padButton zero dark-gray">0</button>  
                <button onClick={()=>display('.')} id="decimal" className="padButton dot dark-gray">.</button>  
                </div>
        </div>
    )   
};


ReactDOM.render(<App/> , document.getElementById('root'))