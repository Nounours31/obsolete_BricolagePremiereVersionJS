'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-09 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1952';
    this._commitGIT = 'f4b59700d4b2aca76bf2823890196a4e645cb033';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}