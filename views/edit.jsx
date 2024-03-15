const React = require('react')
const Default = require('./layouts/default')

function Edit ({ bread }) {
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
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit