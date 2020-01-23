'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-23 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-913';
    this._commitGIT = '9d737d4e89cf2c0d3e97dd2602c1840a11ea5125';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}