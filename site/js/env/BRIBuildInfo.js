'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1093';
    this._commitGIT = '9247a70aa6d12b9878153c43faf2840aca739de4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}