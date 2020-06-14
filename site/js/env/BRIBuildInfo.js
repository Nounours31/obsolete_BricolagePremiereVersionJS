'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1485';
    this._commitGIT = '7ffebd8ccefeb90763ab803f516602d0968e8624';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}