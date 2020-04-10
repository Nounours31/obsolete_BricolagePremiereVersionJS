'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1225';
    this._commitGIT = '00b06e22725d3f4d331f40f29ebf74efb339b9bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}