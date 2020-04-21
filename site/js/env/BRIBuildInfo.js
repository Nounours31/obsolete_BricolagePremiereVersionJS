'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-21 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1269';
    this._commitGIT = '7bb329e065b4e8a2c7736e01c4a09c6dd77b645a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}