'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-15 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1607';
    this._commitGIT = '6e021ad9bf566ec0bad7c24f9c84e252e12ff1b8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}