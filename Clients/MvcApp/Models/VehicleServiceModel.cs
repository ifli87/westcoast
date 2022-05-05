using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using MvcApp.ViewModels;

namespace MvcApp.Models
{
  public class VehicleServiceModel
  {
    private readonly string _baseUrl;
    private readonly JsonSerializerOptions _options;
    private readonly IConfiguration _config;

    public VehicleServiceModel(IConfiguration config)
    {
      _config = config;
      _baseUrl = $"{_config.GetValue<string>("baseUrl")}/vehicles";

      _options = new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true
      };
    }

    public async Task<List<VehicleViewModel>> ListAllVehicles()
    {
      var url = $"{_baseUrl}/list";

      using var http = new HttpClient();
      var response = await http.GetAsync(url);

      if (!response.IsSuccessStatusCode)
      {
        throw new Exception("Det gick inget vidare");
      }

      var vehicles = await response.Content.ReadFromJsonAsync<List<VehicleViewModel>>();
      // var result = await response.Content.ReadAsStringAsync();
      // var vehicles = JsonSerializer.Deserialize<List<VehicleViewModel>>(result, _options);

      return vehicles ?? new List<VehicleViewModel>();
    }
  }
}