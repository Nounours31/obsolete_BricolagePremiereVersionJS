'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-12 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1719';
    this._commitGIT = 'c3cdbc98e33deb06a82df2b33cd8aec9eab0a781';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}