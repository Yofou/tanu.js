import { t } from "./"

const member = t.interface("Member", {
	name: t.string(),
	parent: t.self(),
})

const organisation = t.type("name", t.union([{
	foo: t.self(),
}, t.string()]))

t.generate([member, organisation])
	.then(console.log)
