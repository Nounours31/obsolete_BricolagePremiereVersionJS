'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-18 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-894';
    this._commitGIT = '5fd14eab6d02a330576a3f349621be156b33381e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}