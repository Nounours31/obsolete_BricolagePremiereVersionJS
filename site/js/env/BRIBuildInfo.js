'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-14 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-875';
    this._commitGIT = '8d1363ae9796513efb33b086261a897e75c8830c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}