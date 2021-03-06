defmodule HenosisWeb.Graphql.Schema do
  use Absinthe.Schema
  # import AbsintheErrorPayload.Payload

  import_types(AbsintheErrorPayload.ValidationMessageTypes)

  import_types(Absinthe.Type.Custom)

  import_types(HenosisWeb.Graphql.Types.{
    Account,
    Permission,
    Organization,
    Session
  })

  import_types(HenosisWeb.Graphql.Queries.{
    Account,
    Permission,
    Organization,
    Session
  })

  import_types(HenosisWeb.Graphql.Mutations.{
    Account,
    Permission,
    Organization,
    Session
  })

  import_types(HenosisWeb.Graphql.Subscriptions.{
    Account,
    Permission,
    Organization,
    Session
  })

  query do
    import_fields(:account_queries)
    import_fields(:permission_queries)
    import_fields(:organization_queries)
    import_fields(:session_queries)
  end

  mutation do
    import_fields(:account_mutations)
    import_fields(:permission_mutations)
    import_fields(:organization_mutations)
    import_fields(:session_mutations)
  end

  subscription do
    import_fields(:account_subscriptions)
    import_fields(:permission_subscriptions)
    import_fields(:organization_subscriptions)
    import_fields(:session_subscriptions)
  end
end
