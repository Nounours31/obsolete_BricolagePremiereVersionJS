'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-134';
    this._commitGIT = 'b9bcf9290d3b804c9ea4066ea80ef0e50e9e3cc4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}