'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-703';
    this._commitGIT = 'daad00467f7f870d53b75e84515d131b7cbb5508';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}