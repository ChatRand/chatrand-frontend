const GenderSelect = () => {
  return (
    <div className="h-full w-full">
      <h3 className="text-center mt-10 text-xl">Choose Your Gender</h3>
      <div className="flex flex-col items-center justify-around">
        <div className="flex items-center justify-between w-48 h-10 pr-5 pl-5 pt-10 pb-10">
            <div>
              <input type="radio" id="male" name="gender" value="Male" />
              <label for="male">Male</label>
            </div>
      
            <div>
              <input type="radio" id="female" name="gender" value="Female" />
              <label for="female">Female</label>
            </div>
        </div>

        <button className="bg-primary pr-10 pl-10 pt-5 pb-5 rounded-lg cursor-pointer">Enter</button>
      </div>
    </div>
  )
}

export default GenderSelect;