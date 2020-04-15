'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1244';
    this._commitGIT = 'a37c2d3cf4689db96ed4ed696a4d33c966695d56';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}