# Gameplan

- use refine/core https://refine.dev/docs/api-reference/core/ for admin webui stuff
- use rw web stuff for other non-admin web (non CRUDish stuff)
- still continue using rw api as endpoints
- use Cubes for reporting and analitics (no need to include this in this POC now, look at our other repos)
- TODO: low prio, use some queue for pubsub/scheds/headlifting stuff (im looking at you uploads)


# TODO
- [ ] test that rbac and other auth still works (im guess yes since rw-api-gql padin gamit)
- [ ] include CRUD operations
- [ ] add relationships navigation
- [ ] update api model scaffolds to support expected schema by refine
- [ ] add a strongly typed web list and forms generator from a web frontend schema file
- [ ] see where rw-form and refine-form overlaps, both is using RHF so should be good
- [ ] rw form errors (backend error results)
