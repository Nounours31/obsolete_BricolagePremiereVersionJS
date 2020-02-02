'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-02 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-953';
    this._commitGIT = '214870c330892123388f386e0735c68e68a854ae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}