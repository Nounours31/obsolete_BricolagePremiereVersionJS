'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-21 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1388';
    this._commitGIT = '5b62414ec0f64cbfaf3215009096bda7dc96b182';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}