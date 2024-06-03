using System.Text.Json.Serialization;
using System.Text.Json;

namespace FrontEnd_silicon.Components.GraphQl;

public class GraphQLResponse
{
    [JsonPropertyName("data")]
    public JsonElement Data { get; set; }
}
