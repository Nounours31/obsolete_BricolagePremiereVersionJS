'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1043';
    this._commitGIT = '74d9c9e949207866f3ab8c8fe499360a77a83184';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}