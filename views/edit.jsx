const React = require('react')
const Default = require('./layouts/default')

function Edit ({ bread, bakers }) {
    const bakerSelect = bakers.map(baker => {
        return (
            <option key={baker.id} value={baker.id}>{baker.name}</option>
        )
    })
    return (
        <Default>
            <h2>Edit a bread</h2>
            <form action = {`/bread/${bread.id}?_method=PUT`} method = 'POST'>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />
                <label htmlFor="hasGluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked={bread.hasGluten}
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker}>
                    {bakerSelect}
                </select>
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit