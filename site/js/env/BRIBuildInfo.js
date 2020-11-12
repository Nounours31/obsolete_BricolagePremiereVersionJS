'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-12 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2087';
    this._commitGIT = '7d403026c7b9fcea1acd866093f980c4526c51ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}