'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-24 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1281';
    this._commitGIT = '4f2ec2060a6f6fa375ecb8acdbcfae9444b5b88c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}