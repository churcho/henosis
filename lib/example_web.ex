defmodule ClumsyChinchillaWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use ClumsyChinchillaWeb, :controller
      use ClumsyChinchillaWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  @spec controller ::
          {:__block__, [], [{:alias, [...], [...]} | {:import, [...], [...]} | {:use, [...], [...]}, ...]}
  def controller do
    quote do
      use Phoenix.Controller, namespace: ClumsyChinchillaWeb

      import Plug.Conn
      import ClumsyChinchillaWeb.Gettext
      alias ClumsyChinchillaWeb.Router.Helpers, as: Routes
    end
  end

  @spec view ::
          {:__block__, [], [{:alias, [...], [...]} | {:import, [...], [...]} | {:use, [...], [...]}, ...]}
  def view do
    quote do
      use Phoenix.View,
        root: "lib/clumsy_chinchilla_web/templates",
        namespace: ClumsyChinchillaWeb

      # Import convenience functions from controllers
      import Phoenix.Controller, only: [get_flash: 1, get_flash: 2, view_module: 1]

      import ClumsyChinchillaWeb.ErrorHelpers
      import ClumsyChinchillaWeb.Gettext
      alias ClumsyChinchillaWeb.Router.Helpers, as: Routes
    end
  end

  @spec router :: {:__block__, [], [{:import, [...], [...]} | {:use, [...], [...]}, ...]}
  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  @spec channel :: {:__block__, [], [{:import, [...], [...]} | {:use, [...], [...]}, ...]}
  def channel do
    quote do
      use Phoenix.Channel
      import ClumsyChinchillaWeb.Gettext
    end
  end

  @spec __using__(atom) :: any
  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end