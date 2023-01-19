import React from "react";

function NewEntry() {
    return (
    <div>
        <p> New Entry component</p>
            <form>
                <label>
                    Date:
                    <input type="text" name="date" />
                </label>

                <label>
                    Starting Location:
                    <input type="text" name="startloc" />
                </label>
                
                <label>
                    End Location:
                    <input type="text" name="endloc" />
                </label>

                <label>
                    Mileage:
                    <input type="text" name="mileage" />
                </label>
                
                <label>
                    Elevation:
                    <input type="text" name="elevation" />
                </label>
                
                <label>
                    Notes:
                    <input type="text" name="notes" />
                </label>
                
                <label>
                    Restspot Pin:
                    <input type="text" name="restpin" />
                </label>
                
                
                <input type="submit" value="Submit" />
            </form>
    </div>
    );
}

export default NewEntry;
