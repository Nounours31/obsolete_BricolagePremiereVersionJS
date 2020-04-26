'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-26 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1287';
    this._commitGIT = '6a408f349aee4ef9da874cfd0d56d72ca8d5228d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}